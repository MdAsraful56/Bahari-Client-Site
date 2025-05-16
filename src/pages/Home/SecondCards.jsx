import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';

const SecondCards = () => {

        const [foods, setFoods] = useState([]);
        const [loading, setLoading] = useState(true);
    
        useEffect( () => {
            fetch('../../../public/food.json')
                .then(response => response.json())
                .then(data => {
                    setFoods(data.slice(0, 8));
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        }, [])

    return (
        <div>
            <section className="flex flex-row gap-5">
                <h2 className="text-3xl lg:w-1/2 w-full">Try this delicious recipe to make your day</h2>
                <p className="lg:w-1/2 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam illo harum aut corrupti optio porro tempore ex consequuntur officiis!</p>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

export default SecondCards;