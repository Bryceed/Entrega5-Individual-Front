package br.org.recodepro.squad19mangut.models;

public class JWTResponse 
{
    private Users user;
    private String jwtToken;

    public Users getUser() 
    {
        return user;
    }
    public void setUser(Users user) 
    {
        this.user = user;
    }
    public String getJwtToken() 
    {
        return jwtToken;
    }
    public void setJwtToken(String jwtToken) 
    {
        this.jwtToken = jwtToken;
    }    
}
