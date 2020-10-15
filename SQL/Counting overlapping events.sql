/*
Your task is to create a SQL query which returns the maximum number of simultaneous uses of a service. Each usage ("visit") is logged with its entry and exit timestamps in a "visits" table structured as follows:

id          primary key
entry_time  timestamp of visit start
exit_time   timestamp of visit end
A visit starts at entry time and ends at exit time. At exactly exit time the visit is considered to have already finished. The visits table always contains at least one entry. Your query should return a single row, containing the following columns:

when_happened  earliest timestamp when there were visits_count concurrent visits
visits_count   maximum count of overlapping visits
*/
SELECT COUNT(*) AS visits_count, v1.entry_time AS when_happened
  FROM visits v1 JOIN visits v2 ON (v1.entry_time >= v2.entry_time and v1.entry_time < v2.exit_time)
  GROUP BY v1.id
  ORDER BY visits_count DESC, when_happened ASC LIMIT 1
