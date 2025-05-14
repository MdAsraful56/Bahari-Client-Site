import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';

const FoodCardHome = () => {

    const [food, setFood] = useState({})

    useEffect( () => {
        fetch('/food.json')
        .then(res => res.json())
        .then(data => setFood(data))
    } ,[])
    // console.log(food)

    return (
        <div>
            {
                food.map((fd, index) => <Card key={index} fd={fd} />)
            }
        </div>
    );
};

export default FoodCardHome;