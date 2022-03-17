package br.org.recodepro.squad19mangut.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.org.recodepro.squad19mangut.models.Users;
import br.org.recodepro.squad19mangut.repository.UserRepository;

@Service // to make this class a service
public class UserService 
{
    @Autowired // @Autowired to inject the UserDetailsService
    private UserRepository userRepository;

    public List<Users> findAll()
    {
        return userRepository.findAll();
    }
    
    public Optional<Users> findById(Long id)
    {
        return userRepository.findById(id);
    }

    public Users save(Users user)
    {
        return userRepository.save(user);
    }
    
    public void deleteById(Long id)
    {
        userRepository.deleteById(id);
    }

    public void delete(Users user)
    {
        userRepository.delete(user);
    }
}
