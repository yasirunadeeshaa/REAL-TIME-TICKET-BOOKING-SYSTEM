package com.Ticketing.System.Controller;

import com.Ticketing.System.DataTransferObject.LoginRequestDTO;
import com.Ticketing.System.DataTransferObject.VendorDTO;
import com.Ticketing.System.Model.Vendor;
import com.Ticketing.System.Service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/vendor")
public class VendorController {
    @Autowired
    private VendorService vendorService;

    @GetMapping("/getvendor")
    public List<Vendor> getVendor() {
        return vendorService.getAllVendors();
    }

    @PostMapping("/addvendor")
    public String addVendor(@RequestBody VendorDTO vendorDTO) {
        return vendorService.saveVendor(vendorDTO);
    }
    // Validate vendor login
    @PostMapping("/validate")
    public boolean validateVendor(@RequestBody LoginRequestDTO loginRequest) {
        return vendorService.validateVendor(loginRequest.getUsername(), loginRequest.getEmail());
    }

    @PutMapping ("/updatevendor")
    public String updateVendor(@RequestBody VendorDTO vendorDTO) {
        return vendorService.updateVendor(vendorDTO);
    }

    @DeleteMapping("deletevendor/{vendorID}")
    public String deleteVendor(@PathVariable Integer vendorID) {
        return vendorService.deleteVendor(vendorID);
    }



    //    @GetMapping("getvendor/{vendorID}")
    //    public List<Vendor> getVendorById(@PathVariable int vendorId) {
    //        return vendorService.getAllVendors(vendorId)
    //    }
}