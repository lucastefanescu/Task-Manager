package com.example.demo.model;

public class TaskRequest {
    private String title;
    private String taskType;
    private String dueDate;

    public TaskRequest(String title, String taskType, String dueDate){
        this.title = title;
        this.dueDate = dueDate;
        this.taskType = taskType;
    }
    public String getDueDate() {
        return dueDate;
    }

    public String getTaskType() {
        return taskType;
    }

    public String getTitle() {
        return title;
    }
}
