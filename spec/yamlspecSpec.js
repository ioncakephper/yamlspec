describe('yamlspec command line help and verion switches', () => {

    it('should respond to -h', () => {
        //
        // @todo should respond to -h
        //
        expect(0).toEqual(1);
    })

    it('should respond to -V', () => {
        //
        // @todo should respond to -V
        //
        expect(0).toEqual(1);
    })

    it('should respond with an error message to -v (lowercase)', () => {
        //
        // @todo should respond with an error message to -v (lowercase)
        //
        expect(0).toEqual(1);
    })

    it('should respond to --help', () => {
        //
        // @todo should respond to --help
        //
        expect(0).toEqual(1);
    })

    it('should show command description after usage', () => {
        //
        // @todo should show command description after usage
        //
        expect(0).toEqual(1);
    })

    it('should have every option description start with lowercase', () => {
        //
        // @todo should have every option description start with lowercase
        //
        expect(0).toEqual(1);
    })

    it('the response to -h, --help should start with \'Usage\' and mention the source file', () => {
        //
        // @todo the response to -h, --help should start with \'Usage\' and mention the source file
        //
        expect(0).toEqual(1);
    })
})

describe('yamlspec switches', () => {

    it('should respond to -s with string', () => {
        //
        // @todo should respond to -s with string
        //
        expect(0).toEqual(1);
    })

    it('should respond to --suffix with string', () => {
        //
        // @todo should respond to --suffix with string
        //
        expect(0).toEqual(1);
    })

    it('should warn -s expects string when no string provided', () => {
        //
        // @todo should warn -s expects string when no string provided
        //
        expect(0).toEqual(1);
    })

    it('should warn --suffix expects string when no string provided', () => {
        //
        // @todo should warn --suffix expects string when no string provided
        //
        expect(0).toEqual(1);
    })

    it('should use \'Spec\' as default value when neither -s nor --suffix appear', () => {
        //
        // @todo should use \'Spec\' as default value when neither -s nor --suffix appear
        //
        expect(0).toEqual(1);
    })

    it('should respond to -p with path following', () => {
        //
        // @todo should respond to -p with path following
        //
        expect(0).toEqual(1);
    })

    it('should respond to --path with path following', () => {
        //
        // @todo should respond to --path with path following
        //
        expect(0).toEqual(1);
    })

    it('should warn -p expects string when no string provided', () => {
        //
        // @todo should warn -p expects string when no string provided
        //
        expect(0).toEqual(1);
    })

    it('should warn --path expects string when no string provided', () => {
        //
        // @todo should warn --path expects string when no string provided
        //
        expect(0).toEqual(1);
    })

    it('should use \'../spec\' as default value when neither -p nor --path appear', () => {
        //
        // @todo should use \'../spec\' as default value when neither -p nor --path appear
        //
        expect(0).toEqual(1);
    })
})

describe('yamlspec source file', () => {

    it('should accept only a single file', () => {
        //
        // @todo should accept only a single file
        //
        expect(0).toEqual(1);
    })
})

describe('yamlspec generated javascript file', () => {

    it('should have the \'.js\' extension', () => {
        //
        // @todo should have the \'.js\' extension
        //
        expect(0).toEqual(1);
    })

    it('basename should end with \'Spec\' when neither -s nor --suffix appear', () => {
        //
        // @todo basename should end with \'Spec\' when neither -s nor --suffix appear
        //
        expect(0).toEqual(1);
    })

    it('basename should end with value of -s when -s <suffix> provided', () => {
        //
        // @todo basename should end with value of -s when -s <suffix> provided
        //
        expect(0).toEqual(1);
    })

    it('basename should end with value of --suffix when --suffix <suffix> provided', () => {
        //
        // @todo basename should end with value of --suffix when --suffix <suffix> provided
        //
        expect(0).toEqual(1);
    })

    it('should appear in the \'../spec\' folder when neither -p nor --path specified', () => {
        //
        // @todo should appear in the \'../spec\' folder when neither -p nor --path specified
        //
        expect(0).toEqual(1);
    })

    it('should appear in the folder specified in -p <path>', () => {
        //
        // @todo should appear in the folder specified in -p <path>
        //
        expect(0).toEqual(1);
    })

    it('should appear in the folder specified in --path <path>', () => {
        //
        // @todo should appear in the folder specified in --path <path>
        //
        expect(0).toEqual(1);
    })

    it('should be error free when run via \'jasmine\'', () => {
        //
        // @todo should be error free when run via \'jasmine\'
        //
        expect(0).toEqual(1);
    })
})
