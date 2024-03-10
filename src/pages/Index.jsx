import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Button, Textarea, useToast, Image } from "@chakra-ui/react";
import { FaCode, FaCopy } from "react-icons/fa";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const toast = useToast();

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleGenerateCode = () => {
    // TODO: Implement actual code generation logic
    const mockGeneratedCode = `function greet(name) {\n  console.log("Hello, " + name + "!");\n}`;
    setGeneratedCode(mockGeneratedCode);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    toast({
      title: "Code copied",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Code Generation
          </Heading>
          <Text fontSize="xl">Enter a prompt and let AI generate code for you!</Text>
        </Box>
        <Box>
          <Image src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZ2VuZXJhdGlvbiUyMGlsbHVzdHJhdGlvbnxlbnwwfHx8fDE3MTAwMjEwODd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Code Generation" objectFit="cover" borderRadius="md" mb={4} />
          <Textarea value={prompt} onChange={handlePromptChange} placeholder="Enter your prompt here..." size="lg" rows={6} />
          <Button colorScheme="blue" size="lg" mt={4} onClick={handleGenerateCode} leftIcon={<FaCode />}>
            Generate Code
          </Button>
        </Box>
        {generatedCode && (
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Generated Code:
            </Heading>
            <Box p={4} bg="gray.100" borderRadius="md" whiteSpace="pre" fontFamily="monospace" fontSize="md">
              {generatedCode}
            </Box>
            <HStack mt={4}>
              <Button colorScheme="green" size="md" onClick={handleCopyCode} leftIcon={<FaCopy />}>
                Copy Code
              </Button>
            </HStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
