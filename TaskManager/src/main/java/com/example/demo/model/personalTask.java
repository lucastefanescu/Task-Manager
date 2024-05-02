package com.example.demo.model;

import org.springframework.beans.factory.annotation.Qualifier;

import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;

@Qualifier("Personal")
public class personalTask implements Task{

    private final String taskType;
    private final UUID Id;
    private final String title;
    private final LocalDate dueDate;

    public personalTask(String title, LocalDate dueDate, String taskType){
        this.Id = UUID.randomUUID();
        this.title = title;
        this.dueDate = dueDate;
        this.taskType = taskType;
    }
    public UUID getId() {
        return Id;
    }
    public String getTitle(){
        return title;
    }
    public LocalDate getDueDate(){
        return dueDate;
    }
    public String getTaskType(){ return taskType; }
}
