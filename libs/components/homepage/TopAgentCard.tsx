import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const TopAgentCard = () => {
    return (
        <Stack className="top-agent-card">
            <Box
                className={"card-img"}
                style={{
                    backgroundImage: `url("/img/profile/girl.svg")`,
                }}
            ></Box>
            <Typography className="agent-name">
                <strong>Lesly</strong>
            </Typography>
            <Typography className="agent-details">Agent</Typography>
        </Stack>
    );
};

export default TopAgentCard;