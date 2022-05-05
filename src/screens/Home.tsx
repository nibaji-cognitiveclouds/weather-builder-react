import { Button, Card, Container, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import {styles} from "../styles/screen"

const Home : FC = ()=>{

    const [text, setText] = useState<string>("")

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        setText(e.target.value)
    }

    return <>
        <Container style={styles.container}>
            <Card style={styles.card} >
                <TextField
                style={{margin: 10}}
                    placeholder="Enter country"
                    value={text}
                    onChange={handleChange}
                />
                <Button
                    disabled={!text.length}
                    onClick={()=>{
                        navigate("/country", {
                            state:{
                                country: text
                            }
                        })
                    }}
                >
                    Search
                </Button>
            </Card>
        </Container>
    </>
}

export default Home