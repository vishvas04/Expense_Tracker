import { useForm } from "react-hook-form";
import { Form, Button, Container } from "react-bootstrap";
import Summary from "./Summary";
import {useState } from 'react';
import Visualise from "./Visualise";
function Expense() {
  const [response, setResponse] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onFormSubmit=(userObj)=>{
    // console.log(userObj)
  //   const a=parseInt(userObj.electricity)+parseInt(userObj.water)+parseInt(userObj.groceries)+parseInt(userObj.rent);
  // (a<=1000)?(
  //     console.log(a,'hello'),
    setResponse(userObj)
  //   (console.log("exceeded the daily limit"),
    handleCreate(userObj)
  };
  const handleCreate = (userObj) => {
    fetch('http://localhost:3000/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObj),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success (e.g., update state or notify the user)
        console.log('Post created:', data);
      })
      .catch((error) => {
        // Handle error (e.g., show an error message)
        console.error('Error creating post:', error);
      });
  };

  return (
    <Container>
      <div className="display-3 text-center mb-3"><h1 className="display-13">Expense in the year 2022</h1></div>
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 mx-auto">
          <Form onSubmit={handleSubmit(onFormSubmit)}>
          <Form.Group className="mb-3">
              <Form.Label>Enter the month</Form.Label>
              <Form.Control type="text" {...register("month", { required: true })}/>
              {errors.month && (
                <p className="text-danger">Month is required</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Expense for groceries</Form.Label>
              <Form.Control type="number" {...register("groceries", { required: true,validate:{
                exceedLimit:(v) => v<=1000
              } })}/>
              {errors.groceries?.type==="exceedLimit" &&(
                <p className="text-danger">Groceries amount is exceeded</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Expense spent for paying electricty bills</Form.Label>
              <Form.Control type="number" {...register("electricity", { required: true })} />
              {errors.electricity>=2000 &&(
                <p className="text-danger">Electricty amount is required</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Expense spent for paying water bills</Form.Label>
              <Form.Control type="number" {...register("water", { required: true })} />
              {errors.water && (
                <p className="text-danger">Water bill amount is required</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Expense spent on paying rents</Form.Label>
              <Form.Control type="number" {...register("rent", { required: true })} />
              {errors.rent && <p className="text-danger">Rent amount is required</p>}
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
          {/* {
            console.log(errors.groceries.data>=2000)
          } */}
          <Summary response={response}/>
          <Visualise response={response}/>
        </div>
      </div>
    </Container>
  );
}
export default Expense;
