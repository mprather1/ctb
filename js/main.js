var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 30,
    occupation: "Worker"
  },
});

var PersonView = Backbone.View.extend({
  tagName: 'li',
  // className: 'person',
  // id: 'some-person'

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html( this.model.get('name') );
  }
});

var person = new Person;
var personView = new PersonView({ model: person });
