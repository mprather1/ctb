//Person Model
var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 30,
    occupation: "Worker"
  },
});

//Collection of people
var PeopleCollection = Backbone.Collection.extend({
  model: Person
});

//View for a person
var PersonView = Backbone.View.extend({
  tagName: 'li',
  // className: 'person',
  // id: 'some-person'

  template: _.template( $('#personTemplate').html() ),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html( this.template(this.model.toJSON()) );
  }
});

//Instantiate 
var person = new Person;
var peopleCollection = new PeopleCollection([
  {
    name: 'mike',
    age: 33
  },
  {
    name: 'joe',
    age: 400
  }
]);
