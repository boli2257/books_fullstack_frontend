import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export const MyCard = ({title, author, cover, description, rating, categ, category}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{width:"300px"}}>
      <Card.Section>
        <Image
          w="100%"
          src={cover}
          mah={220}
          fit='cover'
        //   style={{aspectRatio:"1/1"}}
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="pink">{rating}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Text size="sm" c="dimmed">
        Szerző: {author}
      </Text>
      
      {categ ? <Text size="sm" c="dimmed">
        Kategória: {category}
      </Text> : null}

      
    </Card>
  );
}