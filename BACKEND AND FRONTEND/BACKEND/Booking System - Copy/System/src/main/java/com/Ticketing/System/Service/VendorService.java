package com.Ticketing.System.Service;

import com.Ticketing.System.DataTransferObject.VendorDTO;
import com.Ticketing.System.Model.Vendor;
import com.Ticketing.System.Repository.VendorRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class VendorService {
    @Autowired
    private VendorRepository vendorRepository;
    @Autowired
    private ModelMapper modelMapper;

    public List<Vendor> getAllVendors() {
        List<Vendor> vendors = vendorRepository.findAll();
        return modelMapper.map(vendors, new TypeToken<List<VendorDTO>>() {}.getType());
    }

    public String saveVendor(VendorDTO vendorDTO) {
        vendorRepository.save(modelMapper.map(vendorDTO, Vendor.class));
        return "save successfully";
    }
    public boolean validateVendor(String username, String email) {
        return vendorRepository.existsByVendorNameAndVendorEmail(username, email);
    }

    public String updateVendor(VendorDTO vendorDTO) {
        vendorRepository.save(modelMapper.map(vendorDTO, Vendor.class));
        return "update successfully";
    }
    public String deleteVendor(int vendorID) {
        vendorRepository.deleteById(vendorID);
        return "delete successfully";
    }

    public VendorDTO getVendorByvendorID(Integer vendorid) {
        Vendor vendor = vendorRepository.getVendorByvendorID(vendorid);
        return modelMapper.map(vendor, VendorDTO.class);
    }

}