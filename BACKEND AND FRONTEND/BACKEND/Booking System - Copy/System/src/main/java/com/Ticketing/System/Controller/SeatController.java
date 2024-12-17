package com.Ticketing.System.Controller;


import com.Ticketing.System.DataTransferObject.SeatDTO;
import com.Ticketing.System.Service.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "api/seat/")
public class SeatController {
    @Autowired
    private SeatService seatService;

    @GetMapping("getseats")
    public List<SeatDTO> getAllSeats() {
        return seatService.getAllSeats();
    }
    @GetMapping("getseat/{seatID}")
    public SeatDTO getSeatBy_SeatId(@PathVariable Long seatId) {
        return seatService.getSeatBySeatId(seatId);
    }
    @PostMapping("addseat")
    public SeatDTO addSeat(@RequestBody SeatDTO seatDTO) {
        return seatService.addseat(seatDTO);
    }
    @PutMapping("updateseat")
    public SeatDTO updateSeat(@RequestBody SeatDTO seatDTO) {
        return seatService.updateSeat(seatDTO);
    }
    @DeleteMapping("deleteseat/{seatID}")
    public String deleteSeat(@PathVariable Long seatId) {
        return seatService.deleteSeat(seatId);

    }
}