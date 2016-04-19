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

//View for all people
var PeopleView = Backbone.View.extend({
  tagName: 'ul',

  //filter through each and create view, render and append to root element
  render: function() {
    this.collection.each(function(person) {
      var personView = new PersonView({ model: person });
      this.$el.append(personView.render().el);
    }, this);
    return this;
  }
});

//View for a person
var PersonView = Backbone.View.extend({
  tagName: 'li',
  // className: 'person',
  // id: 'some-person'

  template: _.template( $('#personTemplate').html() ),

  render: function() {
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
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

var peopleView = new PeopleView({ collection: peopleCollection });
$(document.body).html(peopleView.render().el);
