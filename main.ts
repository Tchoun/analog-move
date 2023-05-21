radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        if (0 > 0) {
        	
        }
    } else if (receivedString == "B") {
        if ((0 as any) < (180 as any)) {
        	
        }
    } else if (receivedString == "C") {
    	
    } else if (receivedString == "D") {
    	
    } else if (receivedString == "E") {
    	
    } else if (receivedString == "F") {
    	
    } else {
        Kitronik_Move_Motor.stop()
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "HAUT") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, Math.map(value, 550, 1023, 10, 100))
    } else if (name == "BAS") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, Math.map(value, 1, 450, 10, 100))
    } else if (name == "GAUCHE") {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, Math.map(value, 1, 450, 10, 100))
    } else if (name == "DROITE") {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, Math.map(value, 550, 1023, 10, 100))
    }
})
radio.setGroup(1)
