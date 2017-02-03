var container = element(by.css('.custom-comparator'));
var types = container.all(by.repeater('noteBooks').heading('note.type'));

it('should sort noteBooks by name (in correct alphabetical order)', function() {
  expect(types.get(0).getText()).toBe('my');
  expect(types.get(1).getText()).toBe('starter');
  expect(types.get(2).getText()).toBe('example');
});
