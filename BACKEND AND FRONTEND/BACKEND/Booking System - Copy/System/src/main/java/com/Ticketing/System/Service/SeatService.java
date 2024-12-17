package com.Ticketing.System.Service;

import com.Ticketing.System.DataTransferObject.SeatDTO;
import com.Ticketing.System.Model.Seat;
import com.Ticketing.System.Repository.SeatRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class SeatService {
    @Autowired
    private SeatRepository seatRepository;

    @Autowired
    private ModelMapper modelMapper;

    public List<SeatDTO> getAllSeats() {
        List<Seat> seatlist = seatRepository.findAll();
        return modelMapper.map(seatlist,new TypeToken<List<SeatDTO>>(){}.getType());
    }
    public SeatDTO getSeatBySeatId(Long seatid) {
        Seat seat = seatRepository.getSeatBy_SeatId(seatid);
        return modelMapper.map(seat,SeatDTO.class);
    }
    public SeatDTO addseat(SeatDTO seatDTO) {
        seatRepository.save(modelMapper.map(seatDTO,Seat.class));
        return seatDTO;
    }
    public SeatDTO updateSeat(SeatDTO seatDTO) {
        seatRepository.save(modelMapper.map(seatDTO,Seat.class));
        return seatDTO;
    }
    public String deleteSeat(Long seatid) {
        seatRepository.getSeatBy_SeatId(seatid);
        return "ticket" + seatid+ "deleted";
    }
}
