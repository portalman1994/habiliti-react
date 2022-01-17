import React, { useEffect, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, CardTitle, CardText, Form, FormFeedback, FormGroup, FormText, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCalendar } from '@fortawesome/free-solid-svg-icons'

const HabitCard = () => {
    const { deleteRecord, getAll } = useIndexedDB('habits');
    let [habits, setHabits] = useState([]);
    useEffect(() => {
        getAll().then(habitsFromDB => {
            setHabits(habitsFromDB);
        });
    }, [getAll]);
    const deleteHabit = (data) => {
        let key = Number(data);
        console.log(key);
        deleteRecord(key).then(event => {
            alert('Deleted key: ' + key);
        });
    };

    return (
        <div className='row row-cols-5'>
            {Object.keys(habits).map((item, i) => (
                <div className='col' key={i}>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h5>{habits[item].title}</h5>
                        </CardTitle>
                        <CardText>
                            <p>{habits[item].description}</p>
                            <button type='button' className='btn btn-trash' id={habits[item].id} onClick={(e) => deleteHabit(e.currentTarget.id)}><FontAwesomeIcon icon={faTrash} /></button>
                            <button type='button' className='btn btn-calendar' id={habits[item].id}><Link to={`/habiliti/calendar/${habits[item].id}`}><FontAwesomeIcon icon={faCalendar} /></Link></button>
                        </CardText>
                    </CardBody>
                </Card>
                <br/>
                </div>
                
            ))}
        </div>
        
    );
}

const Habit = () => {
    const { add } = useIndexedDB('habits');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = data => {
        add({ title: data.title, description: data.description, created: new Date().toDateString() }).then(
            () => {
                console.log(data);

            },
            error => {
                console.log(error);
            }
        );
    }
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <input type='text' name='title' placeholder='Title' {...register('title', { required: true, minLength: 2})} />
                    {errors.title && <p>Invalid Habit Title</p>}
                </FormGroup>
                <FormGroup>
                    <input type='text' name='description' placeholder='Description' {...register('description', { required: true, minLength: 2})} />
                    {errors.description && <p>Invalid Habit Description</p>}
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form>
            <HabitCard />
        </div>
    )
}

export default Habit;