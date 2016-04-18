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

  template: _.template("<strong><%= name %></strong> (<%= age %>) - <%= occupation %>"),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html( this.template(this.model.toJSON()) );
  }
});

var person = new Person;
var personView = new PersonView({ model: person });
