const employee = require("../lib/employee");

describe("employee", () => {
    it("should return an object containing name, id, and email property when called with employee keyword", () => {
      const obj = new employee("Ricky", 1, "ricky@gmail.com");

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });

    it("should set 'number' when created", () => {
      const num = 108;

      const obj = new Arithmetic(num);

      expect(obj.number).toEqual(num);
    });

    it("should default 'number' to 0", () => {
      const obj = new Arithmetic();

      expect(obj.number).toEqual(0);
    });
  });