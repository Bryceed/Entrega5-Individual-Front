package br.org.recodepro.squad19mangut.models;

// IMPORTS
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "tickets")
@Data
public class Tickets {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ticket; // id
    private Boolean isOpen; // is the ticket open?
    private String createdAt; // when was the ticket created?
    private String updatedAt; // when was the ticket updated?

    private String name; // name of the user
    private String email; // email of the user
    private Integer target ; // password of the user
    private String description; // description of the ticket
    private String media; // image of the ticket
}
