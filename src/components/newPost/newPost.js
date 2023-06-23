import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import {useForm } from 'react-hook-form';
import { Button,Form } from 'react-bootstrap';
import FileBase from "react-file-base64"
import "../newPost/newPost.css"
import noImage from "../../download.png"
import { useNavigate } from 'react-router';

const NewPost = () => {
  const navigate = useNavigate();
const [Image , setImage] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ mode: "onTouched" });

      const onsubmitHandler = (e) => {
        const response = {...e , Image}
        navigate("/home")
      }
    

  return (
<div className="container" >
    <h3 className="heading">Add New Events Photos</h3>
    <Form autoComplete="off" onSubmit={handleSubmit(onsubmitHandler)} >
      <Form.Group controlId="formBasicUserName" className="singleRow">
        <Form.Label>Event Name</Form.Label>
        <Form.Control
          className="input"
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
      </Form.Group>
      {errors.name?.type === "required" && (
        <p className="text-danger">
          <small>
            <i>Name is required</i>
          </small>
        </p>
      )}
       
     
      <Form.Group controlId="formBasicUserName" className="singleRow">
        <Form.Label>Held on</Form.Label>
        <Form.Control
          className="input"
          type="date"
          autoComplete="off"
          placeholder="Event Date"
          {...register("date", { required: true })}
        />
      </Form.Group>
      {errors.date?.type === "required" && (
        <p className="text-danger">
          <small>
            <i>date is required</i>
          </small>
        </p>
      )}
         <div className='fileUploaderContainer'>
       <div className='fileUploader'>
        <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => setImage(base64)}
          />
         <div className='uploadedImg'>
          <img src={Image ? Image : noImage} />
         </div>
         </div>
         </div>
        
      <Button        
        variant="primary"
        className="w-100 mt-3 mb-3"
        type="submit"
      >
        Add Post
      </Button>
    </Form>
  </div>
  )
}

export default NewPost
