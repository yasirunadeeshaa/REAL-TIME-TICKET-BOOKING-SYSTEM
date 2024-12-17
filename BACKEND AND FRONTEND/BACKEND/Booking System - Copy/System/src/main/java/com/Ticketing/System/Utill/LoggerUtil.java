package com.Ticketing.System.Utill;

import java.io.IOException;
import java.util.logging.*;

public class LoggerUtil {
    private static Logger logger;

    private LoggerUtil() {
        // Private constructor to prevent instantiation
    }

    public static Logger getLogger(String className) {
        if (logger == null) {
            synchronized (LoggerUtil.class) {
                if (logger == null) {
                    logger = Logger.getLogger(className);
                    setupLogger();
                }
            }
        }
        return logger;
    }

    private static void setupLogger() {
        // Remove default handlers
        Logger rootLogger = Logger.getLogger("");
        Handler[] handlers = rootLogger.getHandlers();
        for (Handler handler : handlers) {
            rootLogger.removeHandler(handler);
        }

        // Add Console Handler
        ConsoleHandler consoleHandler = new ConsoleHandler();
        consoleHandler.setLevel(Level.ALL);
        consoleHandler.setFormatter(new SimpleFormatter());
        logger.addHandler(consoleHandler);

        // Add File Handler
        try {
            FileHandler fileHandler = new FileHandler("application.log", true);
            fileHandler.setLevel(Level.ALL);
            fileHandler.setFormatter(new SimpleFormatter());
            logger.addHandler(fileHandler);
        } catch (IOException e) {
            System.err.println("Failed to initialize file handler for logging: " + e.getMessage());
        }

        // Set the overall logging level
        logger.setLevel(Level.ALL);
    }
}