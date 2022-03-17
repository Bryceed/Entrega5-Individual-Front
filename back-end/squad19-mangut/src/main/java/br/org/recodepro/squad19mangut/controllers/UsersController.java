package br.org.recodepro.squad19mangut.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.org.recodepro.squad19mangut.models.Users;
import br.org.recodepro.squad19mangut.services.UserService;


@RestController // @Controller + @ResponseBody
@RequestMapping(value = "/api/users") // endpoint base
@EnableGlobalMethodSecurity(prePostEnabled = true) // @PreAuthorize
public class UsersController 
{
    @Autowired // @Autowired to inject the UserDetailsService
    private UserService userService;

    @GetMapping // endpoint
    public ResponseEntity<List<Users>> getAll(@AuthenticationPrincipal UserDetails userDetails) // to get the logged user
    {
        return ResponseEntity.ok(userService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> getById(@PathVariable Long id, @AuthenticationPrincipal UserDetails userDetails)
    {
        try
        {
            return ResponseEntity.ok(userService.findById(id).get());
        }
        catch (Exception e)
        {
            return ResponseEntity.notFound().build();
        }
    }

    // Create a new user
    @PostMapping("/create")
    public ResponseEntity<Users> create(@RequestBody Users user)
    {
        try {
            return ResponseEntity.ok(userService.save(user));
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().build();
        }
    }

    // Update an existing user by id
    @PutMapping("/update")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Users> update(@RequestBody Users user)
    {
        try
        {
            // get the logged user authenticated
            Users loggedUser = userService.findById(user.getId()).get();
            if(loggedUser.getId() == user.getId())
            {
                userService.save(user);
                return ResponseEntity.ok().body(user);
            }
            else
            {
                return ResponseEntity.badRequest().build();
            }
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().build();
        }
    }
    @PutMapping("/update/{id}")
    @PreAuthorize("hasAuthority('PERM_UPDATE_USERS') or hasRole('ADMIN')")
    public ResponseEntity<Users> update(@PathVariable Long id, @RequestBody Users user)
    {
        try
        {
            if (userService.findById(id).isPresent())
            {
                userService.save(user);
                return ResponseEntity.ok().body(user);
            }
            else
            {
                return ResponseEntity.notFound().build();
            }
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().build();
        }
    }

    // Delete an existing user by id
    @DeleteMapping("/delete")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Users> delete(@RequestBody Users user)
    {
        try
        {
            // get the logged user authenticated
            Users loggedUser = userService.findById(user.getId()).get();
            if(loggedUser.getId() == user.getId())
            {
                userService.delete(user);
                return ResponseEntity.ok().body(user);
            }
            else
            {
                return ResponseEntity.badRequest().build();
            }
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasAuthority('PERM_DELETE_USERS') or hasRole('ADMIN')")
    public ResponseEntity<Users> delete(@PathVariable Long id)
    {
        try
        {
            if (userService.findById(id).isPresent())
            {
                userService.deleteById(id);
                return ResponseEntity.ok().build();
            }
            else
            {
                return ResponseEntity.notFound().build();
            }
        }
        catch (Exception e)
        {
            return ResponseEntity.badRequest().build();
        }
    }

}
