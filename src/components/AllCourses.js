import React, { useEffect, useState } from "react";
import Course from './Course';
import base_url from "../api/bootapi";
import Axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {
  // state 
  const [courses, setCourses] = useState([])
  // calling api function
  const getAllCoursesFromServer = () => {
    Axios.get(`${base_url}/courses`).
      then((response) => {
        console.log(response.data)
        toast.success("course Loadded",{
          position:"top-right"
        })
        setCourses(response.data)
      }).
      catch((error) => { console.log("Backend Server Not Working ", error);
      toast.error("courses Not Loadded",{
        position:"top-right"
      })
    
    })
  }

  useEffect(() => { getAllCoursesFromServer() }, [])

  return (
    <div>
      <h1>All Courses</h1>
      <p>List Of All Courses are as Follows</p>
      {
        courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} />) : "No courses"
      }
    </div>
  )
}

export default AllCourses;