"use client"

import RecipeCard from "@/components/base/meal/meal";
import BlackRoundButton from "@/components/ui/buttun/BlackRoundButton";
import GreenRoundButton from "@/components/ui/buttun/GreenRoundButtun";
import WhiteRoundButton from "@/components/ui/buttun/WhiteRoundButton copy";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";

const Result: React.FC = () => {
    const [recipes, setRecipes] = useState([{
        id: 0,
        title: '',
        url: '',
        description: '',
        image_url: '',
        category_id: '',
        rank: 0
    }
    ]);
    const [currentMeal, setCurrentMeal] = useState(0);

    const arrowClicked = () => {

        if (currentMeal + 1 < 3) {
            setCurrentMeal(currentMeal + 1);
        } else if (currentMeal == 2) {
            setCurrentMeal(0);
        }
    };

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                /* 赤波線出ているがこれで問題ない */
                const response = await fetch('https://recommend-recipes-4b45go5xeq-an.a.run.app/v1/recipes/recommend', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "texts": ["いやなことがあった", "イライラしている", "痩せたい"],
                        "conditions": ["簡単", "おいしい", "安い"]
                    })
                }); // Call the GET function
                const data = await response.json(); // Extract JSON data from the response
                setRecipes(data['recipes']); // Set the fetched recipes in the state
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
        fetchRecipes();
    }, []);

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">生成結果</h1>
            </div>
            <div className="text-center">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-orange-500">おすすめ度{recipes[currentMeal].rank}位</h1>
                </div>
                <Grid container justifyContent="center">

                    <RecipeCard
                        img={recipes[currentMeal].image_url}
                        title={recipes[currentMeal].title}
                        description={recipes[currentMeal].description}
                        width="350px"
                        height="450px"
                        url={recipes[currentMeal].url} />
                </Grid>

                <GreenRoundButton>これを作る！</GreenRoundButton>
                <br></br><br></br>
                <WhiteRoundButton onClick={() => arrowClicked()}>←おすすめ度{recipes[currentMeal].rank - 1 == 0 ? 3 : recipes[currentMeal].rank - 1}位</WhiteRoundButton>
                <BlackRoundButton onClick={() => arrowClicked()}>おすすめ度{recipes[currentMeal].rank + 1 == 4 ? 1 : recipes[currentMeal].rank + 1}位→</BlackRoundButton>
            </div >
        </>
    );
}

export default Result;