package com.example.demo.model;

import java.time.LocalDate;
import java.util.UUID;

public interface Task {

    UUID getId();

    String getTitle();

    LocalDate getDueDate();

    String getTaskType();

}