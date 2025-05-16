import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';

const FoodCardHome = () => {

    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch('../../../public/food.json')
            .then(response => response.json())
            .then(data => {
                setFoods(data.slice(10, 19));
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [])

    return (
        <div className='mt-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    loading ? (
                        <p>Loading...</p>
                    ) : (
                        foods.map((food, index) => <Card key={index} food={food} />)
                    )
                }
            </div>
        </div>
    );
};

export default FoodCardHome;