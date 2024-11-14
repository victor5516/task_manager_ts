import { Request, Response, Router } from 'express';
import Task from '../models/tastk'
import { error } from 'console';


const router = Router();

router.get('/tasks', async (req: Request, res: Response) => {
    const tasks = await Task.findAll();
    res.json(tasks)
})

router.post('/tasks', async (req: Request, res: Response) => {
    const { name, dueDate, status } = req.body;
    const task = await Task.create({name, dueDate,status})
    res.json(task)
})

router.put('/tasks/:taskId', async (req: Request, res: Response) => {
    const { taskId } = req.params
    const { name, dueDate, status } = req.body;
    const task = await Task.findByPk(+taskId)
    if(task){
        await task.update({name, dueDate,status})
        res.json(task)
    }else{
        res.status(404).json({error: 'task not found'})
    }

})

router.delete('/tasks/:taskId', async (req: Request, res: Response) => {
    const { taskId } = req.params
   const task = await Task.findByPk(+taskId)
    if(task){
        await task.destroy();
        res.json({message: 'Task deleted'})
    }else{
        res.status(404).json({error: 'task not found'})
    }
})


export default router