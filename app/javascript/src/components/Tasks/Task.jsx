import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { UpdateTaskForm } from './../index'

function Task({ task, onDragStart, onDragEnter, backgroundColor }) {
  const [modalOpen, setModalOpen] = useState(false)
  const handleClick = () => {
    setModalOpen(true)
  }
  return (
    <Card draggable onDragStart={onDragStart} onDragEnter={onDragEnter} sx={{mb: 1, backgroundColor: backgroundColor}}>
      <CardActionArea onClick={handleClick}>
        <CardContent >
          <Typography gutterBottom variant="h6">
            {task.title}
          </Typography>
          </CardContent>
      </CardActionArea>

      { modalOpen &&  <UpdateTaskForm task={task} modalOpen={modalOpen} setModalOpen={setModalOpen} />}
    </Card>
  )
}

export default Task;