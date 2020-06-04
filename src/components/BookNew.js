import React, { Component } from 'react';
import { Form, Input, Button , message , InputNumber ,Select } from 'antd';
import axios from "axios"
import urlConstant from "./BookUrl"
class BookNew extends Component {

  formRef = React.createRef();

  onReset = () => {
    this.formRef.current.resetFields();
  };

  constructor(props){
    super(props);
    console.log("constructor");
      
    this.state={

      id:'',
      title:'',
      author:'',
      coverPhotoURL:'',
      isbnNumber:'',
      price:'',
      language:''
    }
  };

  
  initialState ={
    id:'',
    title:'',
    author:'',
    coverPhotoURL:'',
    isbnNumber:'',
    price:'',
    language:''
};

  render() { 

    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };

    const onFinish = values => {
    //   alert("Success : "+values.title + " Author : "+values.coverPhotoURL);
    //   console.log('Success:', values.coverPhotoURL);
    //   alert("data");
    //  alert(urlConstant.BookUrls.CreateBook);
    axios.post(urlConstant.BookUrls.CreateBook,values)
    .then(response => {

        if(response.data != null){

          message.success('Great! Item has been saved.')
          setTimeout(() => this.props.history.push("/list"),3000);

        }else{
          message.error("Record Not Save !!!!!!")
         
        }

    })

    };
  
    // const onFinishFailed = errorInfo => {
    //   alert("Error : "+errorInfo);
    //   console.log('Failed:', errorInfo);
    // };

    const book = {
      title:'',
      author:'',
      coverPhotoURL:'',
      isbnNumber:'',
      price:'',
      language:''
    }


    const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

    return (      
    
    <Form {...layout} name="basic" initialValues={book} onFinish={onFinish} 
    ref={this.formRef} >
      <Form.Item
        label="title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input your title!',
          },
        ]}
       >
        
        <Input />
      </Form.Item>


      <Form.Item
        label="author"
        name="author"
        rules={[
          {
            required: true,
            message: 'Please input your author!',
          },
        ]}
      >
        
        <Input />
      </Form.Item>

      
      <Form.Item
        label="coverPhotoURL"
        name="coverPhotoURL"
        rules={[
          {
           
            required: true,
            message: 'Please input your coverPhotoURL!'
          },
        ]}
      >
        
        <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
      </Form.Item>
      
      <Form.Item
        label="isbnNumber test"
        name="isbnNumber"
        rules={[
          {
            type:'integer',
            required: true,
            message: 'Please input your isbnNumber!'
            
          },
        ]}
      >
        
        <InputNumber  />
      </Form.Item>
      
      <Form.Item
        label="price"
        name="price"
        rules={[
          {
            type:'integer',
            required: true,
            message: 'Please input your price!'
          
          },
        ]}
      >
        
        <InputNumber  />
      </Form.Item>
      
      <Form.Item
        label="language"
        name="language"
        rules={[
          {
            required: true,
            message: 'Please input your language!',
          },
        ]}
      >
        
        <Input />
      </Form.Item>



    

     
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        {'      '}
        <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
      </Form.Item>
    </Form>
  );
  }
}
 
export default BookNew;