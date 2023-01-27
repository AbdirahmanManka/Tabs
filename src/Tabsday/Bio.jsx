import {Steps, Button, message, Form, Input,DatePicker,Select } from "antd";
import {useState} from "react";
import 'antd/dist/antd.css'
import './Bio.css'
const MyAbout = (props) => {
    const { Option } = Select;
    const { MonthPicker, RangePicker } = DatePicker;
    let id = 0;
    const [current, setCurrent] = useState(0)
    const [values, setValue] = useState({

        name: "",
        email: "",
        phone: "",
        message: "",
        school: "",
        other: "",
        "end-year": "",
        company: "",
        position: "",
        year: "",
        skills:"",
        DateofBirth:""
    })
    const {getFieldDecorator} = props.form
    const handlePersist = value => {
        setValue({...values, ...value})
        console.log(values)
    }
    const handlePrevious = () => {
        setCurrent(prevState => prevState - 1)
    }
    const handleNext = () => {
        console.log(values)
        setCurrent(prevState => prevState + 1)
    }
    const handleFinish = (e) => {
        e.preventDefault()
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                message.success(values)
            }
        })
    }
    const steps = [
        {
            title: "Bio Data",
            content: <div>
          
                <Form.Item label="Full  Name"    style={{
              position: 'relative',
              zindex: '2',
              left: '35%',
              overflow: 'initial',
              width: '300px',
            }}>
                    {
                        getFieldDecorator("name",{initialValue: values.name, rules: [{required: true, message: "Enter your fullname"}]})(
                            <Input placeholder="Enter your Full Name " onChange={ e => handlePersist({name: e.target.value})}/>
                        )
                    }
                </Form.Item>
                <Form.Item label="Date Of Birth"    style={{
              position: 'relative',
              zindex: '2',
              left: '35%',
              overflow: 'initial',
              width: '300px',
            }}>
          {getFieldDecorator ('date-picker1' ,{initialValue: values["date-picker1"], rules: [{required: true, message: "Select your DOB"}]})(<DatePicker onChange={e=>handlePersist({"date-picker1": e})}/>)}
        </Form.Item>
                <Form.Item label="Email Address"    style={{
              position: 'relative',
              zindex: '2',
              left: '35%',
              overflow: 'initial',
              width: '300px',
            }}>
                    {
                        getFieldDecorator("email", { initialValue: values.email,rules: [{required: true, message: 'Enter Your email address!' }]})(
                            <Input placeholder="Enter your Email address" onChange={ e => handlePersist({email: e.target.value})}/>
                        )
                    }
                </Form.Item>
                <Form.Item label="Gender" hasFeedback    style={{
              position: 'relative',
              zindex: '2',
              left: '35%',
              overflow: 'initial',
              width: '300px',
            }}>
          {getFieldDecorator('select', {
            rules: [{ required: true, message: 'Please select your gender!' }],
          })(
            <Select placeholder="Please select a gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>,
          )}
        </Form.Item >

                
                <Form.Item label="Phone Number"    style={{
              position: 'relative',
              zindex: '2',
              left: '35%',
              overflow: 'initial',
              width: '300px',
            }}>
                    {
                        getFieldDecorator("phone", {initialValue:values.phone,rules: [{required: true, message:'Enter your Phone number'}]})(
                            <Input placeholder="Enter your phone number"  onChange={e=>handlePersist({phone: e.target.value})}/>
                        )
                    }
                </Form.Item>
                
            </div>
        },
        {
            title: "Educational Background",
            content: <div>
               <Form.Item label="Highest level of Education" hasFeedback    style={{
              position: 'relative',
              zindex: '2',
              left: '35%',
              overflow: 'initial',
              width: '300px',
            }}>
          {getFieldDecorator('education', {
            rules: [{ required: true, message: 'Please select your highest level of eductaion!' }],
          })(
            <Select placeholder="Select your Highest level of Education">
              <Option value="university">University</Option>
              <Option value="secondary">High School</Option>
              <Option value="primary">Primary school</Option>
            </Select>,
          )}
        </Form.Item>

                <Form.Item label="Other"    style={{
              position: 'relative',
              zindex: '2',
              left: '35%',
              overflow: 'initial',
              width: '300px',
            }}>
                    {
                        
                        getFieldDecorator("other", {initialValue:values.other,rules: [{required: true}]})(
                            <Input placeholder="Other" onChange={e=>handlePersist({other: e.target.value})}/ >
                        )
                    }
                </Form.Item>
                   <Form.Item label="Start Date"    style={{
                    position: 'relative',
                    zindex: '2',
                    left: '35%',
                    overflow: 'initial',
                    width: '300px',
                  }}>
                {getFieldDecorator ('date-picker2' ,{initialValue: values.start, rules: [{required: true, message: "start date"}]})(<DatePicker.RangePicker/>)}
              </Form.Item>
              
               
            </div>
        },
        {
            
            title: "Hobbies",
            content: <div>
             
               
            </div>
        },
        {
            title: "Experience and Skills",
            content: <div>
                


                <Form.Item label="Place Worked"    style={{
              position: 'relative',
              zindex: '2',
              left: '35%',
              overflow: 'initial',
              width: '300px',
            }}>
                    {
                        getFieldDecorator("company",{initialValue:values.company,rules: [{required: true}]})(
                            <Input placeholder="Enter the places you worked "  onChange={e=>handlePersist({company:e.target.value})}/>
                        )
                    }
                </Form.Item>
                <Form.Item label="Position"    style={{
              position: 'relative',
              zindex: '2',
              left: '35%',
              overflow: 'initial',
              width: '300px',
            }}>
                    {
                        getFieldDecorator("position", {initialValue:values.position, rules: [{required: true}]})(
                            <Input  placeholder="Position" onChange={e=>handlePersist({position:e.target.value})} / >
                        )
                    }
                </Form.Item>
                <Form.Item label="The Year"    style={{
              position: 'relative',
              zindex: '2',
              left: '35%',
              overflow: 'initial',
              width: '300px',
            }}>
                    {
                        getFieldDecorator("year", {initialValue:values.year,rules: [{required: true}]})(
                            <Input placeholder="The year" onChange={e=>handlePersist({year:e.target.value})}/>
                        )
                    }
                </Form.Item>
                <Form.Item label="Skills"    style={{
              position: 'relative',
              zindex: '2',
              left: '35%',
              overflow: 'initial',
              width: '300px',
            }}>
                    {
                        getFieldDecorator("skills", {initialValue:values.skills,rules: [{required: true}]})(
                            <Input placeholder="write down your skills"  onChange={e=>handlePersist({skills:e.target.value})}/>
                        )
                    }
                </Form.Item>

            </div>
            
        }
        
    ]

    return (
        <div>
            <Steps current={current} style={{width :'85%', marginRight:'auto', marginLeft:'auto',marginTop:'20px'}}>
                {
                    steps.map((el ,index)=> <Steps.Step key={index} title={el.title}/>)
                }
            </Steps>
                <Form onSubmit={handleFinish}>
                    {
                        steps[current].content
                    }
                    {
                       ( current > 0) && (<Button
                            type={"primary"}
                            onClick={(e) => handlePrevious(e)}
                            style={{margin: 8}}
                        >Previous</Button>)
                    }
                    {
                        (current < steps.length - 1 ) && (
                            <Button
                            type="primary"
                            onClick={(e) => handleNext(e)}
                            style={{margin: 8}}
                            >Next</Button>)
                    }
                    {
                        (current === steps.length - 1 ) && (
                            <Button
                            htmlType={"submit"}
                            onClick={(e) => handleFinish(e)}
                            style={{margin: 9}}
                        >Finish</Button>)
                    }
                </Form>
        </div>
    );
}

const Me = Form.create({name: "Me"})(MyAbout)
export default Me