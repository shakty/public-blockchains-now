/*
Store some utility functions
*/

class NOWAssignments {

    /**
    * Create Account class
    *
    * @param {web3} _web3 web3 instance from metamask or other provider
    */
    constructor(_web3) {
        // Require config
        const configHandler = require('./config')

        // Create config class with config path
        this.config = new configHandler.NOWConfig(_web3)

        // Require utils
        const utilsHandler = require('./utils')

        this.utils = new utilsHandler.NOWUtils()

        this.web3 = _web3
    }


    /**
     * Validate assignment
     *
     * @param {string} contractAddress Contract address
     * @param {string} validationContractAddress Address of contract
     * @returns Id of assignment check
     */
    async validateAssignment(contractAddress, validationContractAddress) {
        const fromAddress = await this.utils.getFromAccount(this.web3);

        const assignmentValidatorContract = this.utils.getAssignmentValidatorContract(this.web3, fromAddress, validationContractAddress);

        await assignmentValidatorContract.methods.validateAssignment(contractAddress).send({
            from: fromAddress,
            gas: 5000000
        });

        return await assignmentValidatorContract.methods.getHistoryCounter().call({
            from: fromAddress,
        });
    }

    /**
     * Submit assignment
     * 
     * @param {string} contractAddress Contract address
     * @param {string} validationContractAddress Address of validation contract
     * @returns Return submitted assignment
     */
    async submitAssignment(contractAddress, validationContractAddress) {
        const fromAddress = await this.utils.getFromAccount(this.web3);

        const assignmentValidatorContract = this.utils.getAssignmentValidatorContract(this.web3, fromAddress, validationContractAddress);

        // Submit assignment
        await assignmentValidatorContract.methods.submitAssignment(contractAddress).send({
            from: fromAddress,
            gas: 5000000
        });

        // Return submitted assignment
        return await assignmentValidatorContract.methods.getSubmittedAssignment(fromAddress).call({
            from: fromAddress,
        });
    }

    /**
     * Get all test history indexes of student
     * 
     * @param {string} studentAddress Student address
     * @param {string} validationContractAddress Address of validation contract
     * @returns Return array of all test indexes
     */
    async getTestHistoryIndexes(studentAddress, validationContractAddress) {
        const fromAddress = await this.utils.getFromAccount(this.web3);

        const assignmentValidatorContract = this.utils.getAssignmentValidatorContract(this.web3, fromAddress, validationContractAddress);

        const testHistoryIndexes = await assignmentValidatorContract.methods.getTestHistoryIndexes(studentAddress).call({
            from: fromAddress,
        });

        return testHistoryIndexes.filter(val => val !== "0");
    }

    /**
     * Get test results by id 
     *
     * @param {int} id Id of the test
     * @param {string} validationContractAddress Address of validation contract
     * @returns Return test result
     */
    async getTestResults(validationContractAddress, id) {
        const fromAddress = await this.utils.getFromAccount(this.web3);

        const assignmentValidatorContract = this.utils.getAssignmentValidatorContract(this.web3, fromAddress, validationContractAddress);

        const results = await assignmentValidatorContract.methods.getTestResults(id).call({
            from: fromAddress,
        });

        return results;
    }

    /**
     * Get submitted assignment
     *
     * @param {string} studentAddress Address of student
     * @param {string} validationContractAddress Address of validation contract
     * @returns 
     */
    async getSubmittedAssignment(studentAddress, validationContractAddress) {
        const fromAddress = await this.utils.getFromAccount(this.web3);

        const assignmentValidatorContract = this.utils.getAssignmentValidatorContract(this.web3, fromAddress, validationContractAddress);

        const results = await assignmentValidatorContract.methods.getSubmittedAssignment(studentAddress).call({
            from: fromAddress,
        });

        return { "testIndex": results[0], "studentAddress": results[1], "contractAddress": results[2], "knowledgeCoins": results[3], "blockNo": results[4], "submitted": results[5] };
    }

    /**
     * Remove submitted assignment 
     *
     * @param {string} studentAddress Address of student
     * @param {string} validationContractAddress Address of validation contract
     */
    async removeSubmittedAssignment(studentAddress, validationContractAddress) {
        const fromAddress = await this.utils.getFromAccount(this.web3);

        const assignmentValidatorContract = this.utils.getAssignmentValidatorContract(this.web3, fromAddress, validationContractAddress);

        await assignmentValidatorContract.methods.removeSubmittedAssignment(studentAddress).send({
            from: fromAddress,
            gas: 5000000
        });
    }

    /**
     * Check if a student has already submitted an assignment 
     *
     * @param {string} studentAddress Address of student
     * @param {string} validationContractAddress Address of validation contract
     * @returns Return true if assignment is submitted, false if not
     */
    async hasSubmittedAssignment(studentAddress, validationContractAddress) {
        const fromAddress = await this.utils.getFromAccount(this.web3);

        const assignmentValidatorContract = this.utils.getAssignmentValidatorContract(this.web3, fromAddress, validationContractAddress);

        var results = await assignmentValidatorContract.methods.hasAssignmentSubmitted(studentAddress).call({
            from: fromAddress,
        });

        return results;
    }

    /**
     * Get assignment infos 
     *
     * @param {string} validationContractAddress Address of validation contract
     * @returns Return assignment infos
     */
    async getAssignmentInfos(validationContractAddress) {
        const fromAddress = await this.utils.getFromAccount(this.web3);

        const assignmentContract = this.utils.getAssignmentValidatorContract(this.web3, fromAddress, validationContractAddress);

        var infos = await assignmentContract.methods.getAssignmentInfos().call({
            from: fromAddress,
        });


        return infos;
    }
}

// export utils class
module.exports = { NOWAssignments };
