import React, {Component} from 'react';
import {posttextfile} from './rest_routes';

class UploadRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
        msg : ''
    }

  }
  // zie https://www.js-tutorials.com/react-js/learn-react-file-upload-in-5-minute/
  onChangeHandler = (event) => {
    const file = event.target.files[0];
    this.setState({
      selectedFile: file
    });
  };

  fileUploadHandler = () => {
    const cuid = 'test';
    const remoteServer = 'https://wandelappbackend-v5.herokuapp.com';
    posttextfile(remoteServer + '/upload?cuid=' + cuid, this.state.selectedFile,)
      .then(
        (e) => {
          console.log('upload ok ' + e);
          // document.write('upload is done')
          this.props.onUpdated(this.state.selectedFile.name);
            alert(this.state.msg = "file is succsefully uploaded");
        }
      )
      .catch(
        (e) => {
          console.log('fout met upload ' + e);
          this.props.onUpdated(this.state.selectedFile.name);
          alert(this.state.msg ='file is not succesfully uploaded')
        }
      );
  };


  render() {
    return (
      <div>
        <input type="file" onChange={this.onChangeHandler} />
        <button type="button" onClick={this.fileUploadHandler}>Upload GPX bestand</button>
      </div>
    );
  }

}

export default UploadRoute;
