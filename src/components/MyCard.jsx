import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export const MyCard = ({title,author,cover,description,rating,name}) =>{
    
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{width:"300px"}}>
      <Card.Section>
        <Image
          src={cover}
          w='100%'
          mah={220}
          alt={title}
          fit='cover'
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="pink">{rating}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}