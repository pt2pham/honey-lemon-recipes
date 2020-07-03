import React, { Component } from 'react'
import { Table } from 'antd';

class Recipes extends Component {
  constructor(props) {
    super(props);
     // The state of a component can update. Whenever it updates, it re-renders with the new information!
    this.state = {
      recipes: []
    }
  }

  // This function gets called as soon as the component gets loaded 
  // So, this is where we're gonna fetch information from the backend
  // In this case, we're grabbing all of the recipes in the database and storing it in 'recipes'
  componentDidMount() {
    const url = "/api/v1/recipes/index";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not okay");
      })
      // If the response from the backend is okay, then we update the state of this component to include 
      // the recipes we just got
      .then(response => this.setState({ recipes: response}))
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const { recipes } = this.state;

    // This labels the columns, and determines what values will be populated in each column
    // dataIndex is the key inside recipes that corresponds to the name, i.e. recipes.name
    // The different fields for a Recipe can be found in app/controllers/api/v1/recipes_controller.rb#recipe_params
    const columns = [
      {
        title: 'Name', // This is the label
        dataIndex: 'name', 
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Type of Food',
        dataIndex: 'food_type',
        key: 'food_type',
      },
      {
        title: 'Duration',
        dataIndex: 'duration',
        key: 'duration',
      },
      {
        title: 'Difficulty',
        dataIndex: 'difficulty',
        key: 'difficulty',
      },
    ]

    // Should make the table entries clickable, and when we click it
    // sends you to the individualized recipe page.
    return(
      <Table columns={columns} dataSource={recipes}/>
    )
  }
}

export default Recipes;
