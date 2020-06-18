import React, {Component} from 'react';
import {getroutesjson,deleteRoute} from './rest_routes';



//this.state.routes , array , met de id kan ver
// 2 ver uit de wandelapp back-end  in

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
        routes: [],
        remoteserver: 'https://wandelappbackend-v5.herokuapp.com',
        cuid: 'test'
    };
  }

  getRoutes() {
    //Get routes from server

    getroutesjson(this.state.remoteserver + '/routes?cuid=' + this.state.cuid)
      .then(
        (routesjson) => {
          this.setState({routes: routesjson});
        },
        (reason) => {
          // Error retreiving routes!
          console.log(reason);
        }
      )
      .catch(
        (e) => {
          console.log(e);
        }
      )
    ;
  }

  componentDidMount() {
    this.getRoutes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.routes === []) {
      this.getRoutes();
    }
  }

  componentWillReceiveProps(props) {
    if (props.refresh) {
      this.getRoutes();
    }
  }

  selectRoute = (data) => {
    this.props.onRouteSelect(data.json);
  };

    deleteHandler(id) {
      console.log(id);

      let routes = this.state.routes.filter(route => {
        console.log(route);
        return route.data._id !== id

      });
      this.setState({
          routes : routes
      });
      const x = deleteRoute(this.state.remoteserver,id,this.state.cuid);
        console.log(x);
    };


  render() {
    const style = {
      flex: '1 1 0'
    };
    return (
      <div style={style}>
        <ul>
          {this.state.routes.map(route =>
            <li onClick={this.selectRoute.bind(this, route.data)} key={route.data._id}>{route.data.json.features[0].properties.name}>
                <button onClick={this.deleteHandler.bind(this, route.data._id)}>Delete</button>


            </li>

          )}

        </ul>

      </div>
    );
  }
}

export default Routes;
