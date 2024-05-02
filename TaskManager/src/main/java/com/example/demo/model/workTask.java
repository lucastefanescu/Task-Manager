package com.example.demo.model;

import org.springframework.beans.factory.annotation.Qualifier;

import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;

@Qualifier("Work")
public class workTask implements Task {
    private final UUID Id;
    private final String title;
    private final LocalDate dueDate;
    private final String taskType;

    public workTask(String title, LocalDate dueDate, String taskType){
        this.Id = UUID.randomUUID();
        this.title = title;
        this.dueDate = dueDate;
        this.taskType = taskType;
    }
    @Override
    public UUID getId() {
        return Id;
    }
    @Override
    public String getTitle(){
        return title;
    }
    public LocalDate getDueDate(){
        return dueDate;
    }
    public String getTaskType(){ return taskType; }
}
