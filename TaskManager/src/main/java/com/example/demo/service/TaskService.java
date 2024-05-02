package com.example.demo.service;

import com.example.demo.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private static final List<Task> tasks = new ArrayList<>();

    public void saveTask(Task task){
        tasks.add(task);
    }
    public List<Task> getTasks(){
        return this.tasks;
    }
    public Task getLastInstance(){
        return tasks.get(tasks.size() - 1);
    }
    public List<Task> getTaskInstances(){
        return tasks;
    }
}
