package com.example.demo.controller;

import com.example.demo.model.Task;
import com.example.demo.model.TaskRequest;
import com.example.demo.model.personalTask;
import com.example.demo.model.workTask;
import com.example.demo.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.text.spi.DateFormatProvider;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Task")
@CrossOrigin
public class TaskController {

    private TaskService service;

    @Autowired
    public TaskController(TaskService service){
        this.service = service;
    }

    @PostMapping("/add")
    public String addTask(@RequestBody TaskRequest taskRequest) throws ParseException {
        if(taskRequest.getTaskType().equals("Personal")) {
            service.saveTask(new personalTask(taskRequest.getTitle(), LocalDate.parse(taskRequest.getDueDate()), taskRequest.getTaskType()));
        }else if(taskRequest.getTaskType().equals("Work")){
            service.saveTask(new workTask(taskRequest.getTitle(), LocalDate.parse(taskRequest.getDueDate()), taskRequest.getTaskType()));
        }
        return "task was successfully added";
    }
    @GetMapping("/getInstances")
    public List<Task> getTaskInstances(){ return service.getTaskInstances();}
    @GetMapping("/getInstance")
    public Task getLastInstance(){
        return service.getLastInstance();
    }
    @GetMapping("/getAll")
    public List<Task> getTasks(){
        return service.getTasks();
    }
}
