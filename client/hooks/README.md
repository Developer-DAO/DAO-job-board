### useSupabase hook sample usage

```tsx
const userRepository = useSupabase<User>("users");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    userRepository.all().then((users) => {
      setUsers(users);
    });
  }, []);
```