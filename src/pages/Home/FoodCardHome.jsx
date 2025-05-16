import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';

const FoodCardHome = () => {

    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch('../../../public/food.json')
            .then(response => response.json())
            .then(data => {
                setFoods(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [])

    return (
        <div>
            {
                loading ? (
                    <p>Loading...</p>
                ) : (
                    foods.map((food, index) => <Card key={index} food={food} />)
                )
            }
        </div>
    );
};

export default FoodCardHome;