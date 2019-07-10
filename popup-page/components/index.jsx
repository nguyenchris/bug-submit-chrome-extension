import React from 'react';
// import axios from 'axios';
import { Button, Input, Modal, Upload, Icon } from 'antd';
// import * as config from '../../config/config.json';
import 'antd/dist/antd.css';
import { getBase64 } from './utilBaseFile';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: '',
      isSubmitted: false,
      previewImage: '',
      previewVisible: false,
      fileList: [
        {
          uid: ''
        }
      ]
    };
  }

  handleCancel = () => this.setState({ previewVisible: false });

  toggleSubmit = () => {
    this.setState(prevState => {
      isSubmitted: !prevState.isSubmitted;
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, desc } = e.target;
    if (!name.trim() && !desc.trim()) {
      return;
    }
    this.toggleSubmit();
    // this.sendData();
  };

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Input placeholder="Name" />
        <Input placeholder="Description" />
        <Input placeholder="Description" />
        {/* <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
        
          
        </Upload> */}
        <Upload onPreview={this.handlePreview} onChange={this.handleChange}>
          {fileList.length > 1 ? null : uploadButton}
        </Upload>

        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
        <Button type="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    );
  }
}
