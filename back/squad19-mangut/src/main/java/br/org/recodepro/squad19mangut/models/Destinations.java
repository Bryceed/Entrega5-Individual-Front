package br.org.recodepro.squad19mangut.models;

// IMPORTS
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "destinations")
@Data
public class Destinations {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tid;
    private String name;
    private String address;
    private String description;
    private String image;
    private String latitude;
    private String longitude;
    private String price;
    private String tickets;
    private String postDate;
    private String postTime;
    private String postUser;
    private Boolean includeFlyingPass;
    private Boolean includeFood;
    private Boolean includeHotel;
    private Boolean includeWaterTransport;
    private Boolean includeGroundTransport;
    private Boolean includeFlyingTransport;

    private Boolean active;
    private Boolean promotion;
    private String promotionType; // "percentage" or "value"
    private String promotionExpirationType; // "date", "count" or "stock"
    private Integer promotionValue; // value of the promotion
    private String promotionExpirationValue; // value of the expiration
}
