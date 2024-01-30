package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="postitus_info")
public class Postitus {

    @Id
    private String nimi;
    private String teekond;
    private String kuupäev;
    private String kellaaeg;

    public Postitus() {
    }

    public Postitus(String nimi, String teekond, String kuupäev, String kellaaeg) {
        this.nimi = nimi;
        this.teekond = teekond;
        this.kuupäev = kuupäev;
        this.kellaaeg = kellaaeg;
    }

    public String getNimi() {
        return nimi;
    }

    public String getTeekond() {
        return teekond;
    }

    public String getKuupäev() {
        return kuupäev;
    }

    public String getKellaaeg() {
        return kellaaeg;
    }

    public void setNimi(String nimi) {
        this.nimi = nimi;
    }

    public void setTeekond(String teekond) {
        this.teekond = teekond;
    }

    public void setKuupäev(String kuupäev) {
        this.kuupäev = kuupäev;
    }

    public void setKellaaeg(String kellaaeg) {
        this.kellaaeg = kellaaeg;
    }
}
