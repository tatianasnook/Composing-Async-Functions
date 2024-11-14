const { sum } = require("./math");

describe("math", () => {
  test("performs a sample test summing numbers", () => {
    // Arrange
    const a = 1;
    const b = 2;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toEqual(3);
  });
});