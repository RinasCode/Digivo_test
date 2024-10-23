# Tugas Utama

## Optimalkan Query Feed
Query ini menampilkan posting terbaru dari pengguna yang di-follow oleh pengguna tertentu, diurutkan berdasarkan waktu, dan menggunakan pagination.

## Optimasi Comment dan Like
Query ini mengambil jumlah komentar dan like untuk setiap postingan.
```json
{
SELECT Post.*, 
(SELECT COUNT(*) FROM Comment WHERE post_id = Post.id) AS comment_count,
(SELECT COUNT(*) FROM `Like` WHERE post_id = Post.id) AS like_count
FROM Post;
}
```

## Indexing
Untuk meningkatkan performa query, kita dapat menambahkan indeks pada kolom yang sering digunakan.
```json
{
CREATE INDEX idx_user_id ON Post(user_id);
CREATE INDEX idx_post_id ON Comment(post_id);
CREATE INDEX idx_post_id_like ON `Like`(post_id);
}
```

# Persyaratan Teknis


## Menggunakan EXPLAIN 
```json
{
EXPLAIN SELECT Post.*, User.username
FROM Post
JOIN Follow ON Post.user_id = Follow.following_id
JOIN User ON Post.user_id = User.id
WHERE Follow.follower_id = ? 
ORDER BY Post.created_at DESC
LIMIT 10 OFFSET ?;
}
```
